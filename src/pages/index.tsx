import Navbar from '@/components/Layouts/Navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
    const router = useRouter();
    return (
        <div className="relative w-full h-full max-h-full flex flex-col justify-start items-start">
            {/* Header - Fixed at Top */}
            <div className="fixed flex top-0 z-10 w-full items-centerpx-4 h-[50px]">
                <Navbar navName={'Generate Unit Test'} />
            </div>

            {/* Messages - Scrollable Content */}
            <div className="pt-[50px] pb-[100px] p-2 w-full grow container mx-auto overflow-hidden">
                <div className="flex gap-8 w-full h-[60vh] items-center justify-center">
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure className="w-[200px] h-[200px] object-cover">
                            <Image
                                src="https://img5.pic.in.th/file/secure-sv1/imagesab2c4ba57dd5b5e5.png"
                                alt="Assistant"
                            />
                        </figure>
                        <div className="card-body">
                            <h1 className="card-title">Assistant</h1>
                            <p>Generate unit test by openai assistant.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary w-[100px]" onClick={() => router.push('/assistant')}>
                                    Chat
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure className="w-[200px] h-[200px] object-cover">
                            <Image
                                src="https://img2.pic.in.th/pic/afa50ad0-9469-11ee-b3d3-a74cc04b857f_original-1.jpeg"
                                alt="Gemini"
                            />
                        </figure>
                        <div className="card-body">
                            <h1 className="card-title">Gemini</h1>
                            <p>Generate unit test by google gemini.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary w-[100px]" onClick={() => router.push('/gemini')}>
                                    Chat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Textarea and Button - Fixed at Bottom */}
        </div>
    );
}
