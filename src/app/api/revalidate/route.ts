import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Sanity (optional but recommended)
    const secret = request.nextUrl.searchParams.get("secret");
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const body = await request.json();
    const { _type } = body;

    // Revalidate based on content type
    if (_type === "testimonial") {
      // Revalidate pages that use testimonials
      revalidatePath("/");
      revalidatePath("/get-in-touch");
      return NextResponse.json({
        revalidated: true,
        paths: ["/", "/get-in-touch"],
        now: Date.now(),
      });
    }

    if (_type === "story") {
      // Revalidate stories pages
      revalidatePath("/stories");
      revalidatePath("/stories/[slug]", "page");
      return NextResponse.json({
        revalidated: true,
        paths: ["/stories", "/stories/[slug]"],
        now: Date.now(),
      });
    }

    if (_type === "film") {
      // Revalidate films page
      revalidatePath("/films");
      return NextResponse.json({
        revalidated: true,
        paths: ["/films"],
        now: Date.now(),
      });
    }

    if (_type === "home") {
      revalidatePath("/");
      return NextResponse.json({
        revalidated: true,
        paths: ["/"],
        now: Date.now(),
      });
    }

    // If no specific type, revalidate all CMS pages
    revalidatePath("/");
    revalidatePath("/stories");
    revalidatePath("/stories/[slug]", "page");
    revalidatePath("/films");
    revalidatePath("/get-in-touch");

    return NextResponse.json({
      revalidated: true,
      paths: ["all"],
      now: Date.now(),
    });
  } catch (err) {
    console.error("Error revalidating:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    );
  }
}
