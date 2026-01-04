export interface AutoReplyRule {
    id: string;
    keyword: string;
    replyTemplate: string;
    isActive: boolean;
}

export const defaultRules: AutoReplyRule[] = [
    {
        id: '1',
        keyword: 'price',
        replyTemplate: 'Hey! Start your free trial at master-unlocks.com/pricing 🚀',
        isActive: true,
    },
    {
        id: '2',
        keyword: 'help',
        replyTemplate: 'Need support? DM us or check our docs!',
        isActive: true,
    },
    {
        id: '3',
        keyword: 'collab',
        replyTemplate: 'We love collaborations! Send us a DM.',
        isActive: false,
    }
]
