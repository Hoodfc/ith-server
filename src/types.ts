export interface Context {
    data: Data
}

export interface User {
    id: string
    name: string
    password: string
    email: string
}

export interface Data {
    users: User[]
}