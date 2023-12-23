import { DataModelType } from '@/types/assistant.type';
import { useRouter } from 'next/router';
import React from 'react';

const CardModel = ({ name, description, image_url, path }: DataModelType) => {
    const router = useRouter();
    return (
        <div className="card card-side bg-base-100 shadow-xl mr-5">
            <figure className="ml-3 md:ml-0 w-[120px] md:w-[200px] h-[150px] md:h-[200px] object-cover">
                <img src={image_url} alt={name} />
            </figure>
            <div className="card-body">
                <h1 className="card-title">{name}</h1>
                <p className="hidden md:block">{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => router.push(path)}>
                        Chat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardModel;
