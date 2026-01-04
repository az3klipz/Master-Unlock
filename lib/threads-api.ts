export interface ThreadPost {
    id: string;
    content: string;
    mediaUrls?: string[];
    scheduledAt?: Date;
    status: 'draft' | 'scheduled' | 'published' | 'failed';
}

export interface ThreadUser {
    id: string;
    username: string;
    profilePictureUrl: string;
    followerCount: number;
}

class ThreadsAPI {
    private static instance: ThreadsAPI;
    private mockQueue: ThreadPost[] = [];

    private constructor() { }

    public static getInstance(): ThreadsAPI {
        if (!ThreadsAPI.instance) {
            ThreadsAPI.instance = new ThreadsAPI();
        }
        return ThreadsAPI.instance;
    }

    // Mock Authentication - In reality this would be OAuth
    async connectAccount(): Promise<ThreadUser> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: '123456',
                    username: 'phase_engineer',
                    profilePictureUrl: 'https://github.com/shadcn.png',
                    followerCount: 12500
                });
            }, 1000);
        });
    }

    async schedulePost(post: Omit<ThreadPost, 'id' | 'status'>): Promise<ThreadPost> {
        const newPost: ThreadPost = {
            ...post,
            id: Math.random().toString(36).substring(7),
            status: 'scheduled'
        };
        this.mockQueue.push(newPost);
        return newPost;
    }

    async getQueue(): Promise<ThreadPost[]> {
        return this.mockQueue;
    }
}

export const threadsClient = ThreadsAPI.getInstance();
