import React from 'react'

interface PageProps {
    params: {
        videoId: string;
    };
}

const page = async ({ params }: PageProps) => {
    const { videoId } = params;
    return (
        <div className="wrapper page">
            VIDEO DETAILS PAGE: {videoId}
        </div>
    )
}

export default page
