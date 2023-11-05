import ItemCard from "./itemCard";


const Items = () => {
    return (
        <div className="max-w-[1250px] mx-auto px-6 lg:px-0 my-8 md:my-16">
            <h1 className="text-5xl text-center font-playpen">Our Specials Items</h1>
            <div className="my-9 grid grid-cols-3 gap-7">
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
            </div>
        </div>
    );
};

export default Items;