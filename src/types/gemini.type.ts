export type Role = 'model' | 'user';

export type GeminiMessageType = {
    id: string;
    role: Role;
    content: string;
};
