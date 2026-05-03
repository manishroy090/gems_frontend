import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';



export function proxy(request: NextRequest) {
    const accessToken = request.cookies.get('ACCESS_TOKEN')?.value;
 
    if (!accessToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/protected/:path*','/'], 
}