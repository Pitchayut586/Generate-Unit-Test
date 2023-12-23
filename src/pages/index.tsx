import Navbar from '@/components/Layouts/Navbar';
import { DataModel } from '@/mock/DataModel';
import CardModel from '@/components/CardModel';
import { DataModelType } from '@/types/assistant.type';

export default function Home() {
    return (
        <div className="relative w-full h-full max-h-full flex flex-col justify-start items-start">
            {/* Header - Fixed at Top */}
            <div className="fixed flex top-0 z-10 w-full items-centerpx-4 h-[50px]">
                <Navbar navName={'Generate Unit Test'} />
            </div>

            {/* Messages - Scrollable Content */}
            <div className="container mx-5 lg:mx-auto h-[75vh] mt-[80px] lg:mt-[150px]">
                <div className="grid grid-cols-12 gap-5">
                    {DataModel.map((value: DataModelType) => (
                        <div key={value.name} className="col-span-12 lg:col-span-6">
                            <CardModel
                                name={value.name}
                                description={value.description}
                                image_url={value.image_url}
                                path={value.path}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
