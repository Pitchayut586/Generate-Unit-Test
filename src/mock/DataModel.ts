import { DataModelType } from '@/types/assistant.type';

export const DataModel: DataModelType[] = [
    {
        name: 'Assistant',
        description: 'Generate unit test by openai assistant.',
        image_url: 'https://img5.pic.in.th/file/secure-sv1/imagesab2c4ba57dd5b5e5.png',
        path: '/assistant',
    },
    {
        name: 'Gemini',
        description: 'Generate unit test by google gemini.',
        image_url: 'https://img2.pic.in.th/pic/afa50ad0-9469-11ee-b3d3-a74cc04b857f_original-1.jpeg',
        path: '/gemini',
    },
    // {
    //     name: 'Chat Stream',
    //     description: 'Generate unit test by openai assistant.',
    //     image_url: 'https://img2.pic.in.th/pic/afa50ad0-9469-11ee-b3d3-a74cc04b857f_original-1.jpeg',
    //     path: '/chat-stream',
    // },
];
