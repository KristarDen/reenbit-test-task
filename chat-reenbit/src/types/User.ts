interface IUser {
    id: string;
    name: string;
    email: string;
    avatar_src: string;
}

interface IAuthResponse {
    user: IUser;
    token: string;
}

class User implements IUser {
    id: string;
    name: string;
    email: string;
    avatar_src: string;
    
    constructor(
        id: string,
        name: string,
        email: string,
        avatar_src: string,
    ){
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatar_src = avatar_src;
    }
}

class AuthResponse implements IAuthResponse {
    user: IUser;
    token: string;
    constructor(
        user: User,
        token: string
    ){
        this.user = user;
        this.token = token;
    }
}

export { AuthResponse, User };
export type { IAuthResponse, IUser };