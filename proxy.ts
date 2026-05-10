import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decodeToken } from './app/libs/jwt';



export function proxy(request: NextRequest) {

    // const dispatch = useDispatch();
    const accessToken = request.cookies.get('ACCESS_TOKEN')?.value;



    if (!accessToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // const routePermissions = [
    //     {
    //         path: "/superAdmin/usersmanagement/roles",
    //         permissions: ["roles.create"]
    //     }
    //     ,
    //     {
    //         path: "/superAdmin/usersmanagement/users",
    //         permissions: ["user.create"]
    //     },
    //     {
    //         path: "/superAdmin/usersmanagement/doctor",
    //         permissions: ["doctor.create"]
    //     }

    // ]


    // const decodetoken = decodeToken(accessToken);

    // //user Permission
    // const { permission } = decodetoken;

    // const userPermission = permission.map((item) => item.title);

    // const path = request.nextUrl.pathname;

    // const pathrequiredPermissions = routePermissions.find((permission) => permission.path == path);


    // const requiredPermissions = pathrequiredPermissions?.permissions?.map((item) => item);




    // // if route has no restriction → allow
    // if (!requiredPermissions) {
    //     return NextResponse.next();
    // }



    // const hasAccess = requiredPermissions?.some((perm) =>
    //     userPermission.includes(perm)
    // );



    // if (!hasAccess) {

    //     return NextResponse.redirect(new URL('/403', request.url));

    // }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/protected/:path*', '/superAdmin/:path*'],
}