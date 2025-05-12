import Header from '@/components/Header';

const page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params;
    return (
        <div className="wrapper page">
            <Header subHeader="contact@me.com" title="Adrian" userImg="/assets/images/dummy.jpg" />
            <h1 className="text-4xl font-karla">
                User Id: {id}
            </h1>
        </div>
    )
}

export default page
