

const Blog = () => {
    return (
        <div className="max-w-[1250px] mx-auto px-6 lg:px-0 my-11 space-y-8">
            <h1 className="text-3xl md:text-5xl font-semibold text-center font-playpen text-[#64a13b]">Answer of the Questions below:-</h1>
            <div className="space-y-4">
                <h3 className="text-xl md:text-3xl font-semibold">1) What is One-way data binding ?</h3>
                <p className="md:text-lg">
                    In <strong>ReactJS</strong>, components are rendered to the user interface and the component's contains the data to be displayed in UI.
                </p>
                <p className="md:text-lg">
                    <strong>One-way</strong> means That the binding happens in one direction. In this case, changes in the data automatically update the UI,
                    but changes in the UI do not automatically update the data. That's why it referred to as one-way data binding.
                </p>
                <p className="md:text-lg">
                    React achieves One-way data binging by using state and props.
                </p>
            </div>


            <div className="space-y-4">
                <h3 className="text-xl md:text-3xl font-semibold">2) What is NPM in node.js ?</h3>
                <p className="md:text-lg">
                    <strong>NPM</strong> is stands for Node Package Manager. npm is the default package manager for JavaScripts runtime Node.js. npm is a package manager for Node.Js projects made available 
                    for public use. projects available on the npm registry and called "packages".
                </p>
                <p className="md:text-lg">
                    npm allows us to use code written by others easily without the need to write them ourselves during development.
                </p>
            </div>

            <div className="md:space-y-4">
                <h3 className="text-xl md:text-3xl font-semibold">3) Different between Mongodb database vs mySQL database .</h3>
                <div className="grid gap md:grid-cols-2">
                    <div className="border-2 border-[#ffa600] p-6">
                        <h3 className="text-xl md:text-3xl font-semibold text-[#64a13b] text-center">MySQL</h3>
                        <div className="md:text-lg space-y-3 p-5">
                            <p>It stores each individual record as a table cell with rows and column</p>
                            <p>MySQL requires a schema definition for the tables in the database</p>
                            <p>Supports Structured Query Language (SQL)</p>
                            <p>Supports the usage of Foreign keys</p>
                            <p>SQL Database can be scaled vertically</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="border-2 border-[#ffa600] p-6">
                        <h3 className="text-xl md:text-3xl font-semibold text-[#64a13b] text-center">MySQL</h3>
                        <div className="md:text-lg space-y-3 p-5">
                            <p>It stores unrelated data in JSON like documents</p>
                            <p>MondoDB does't require any prior schema</p>
                            <p>Supports JSON Query Language to work with data</p>
                            <p>Doesn't support the usage of Foreign keys</p>
                            <p>MongoDB database can be schaled both vertically and horizontally</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;