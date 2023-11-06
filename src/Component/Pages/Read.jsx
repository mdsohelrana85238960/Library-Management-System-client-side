import { useLoaderData } from "react-router-dom";


const Read = () => {
    const books = useLoaderData();
    console.log(books.description)
    return (
        <div className="w-[900px] mx-auto py-20">
            <h1 className="font-medium text-xl"> {books.description} </h1>
            <p className="text-xl">The history of books became an acknowledged academic discipline in the 1980s. Contributors to the discipline include specialists from the fields of textual scholarship, codicology, bibliography, philology, palaeography, art history, social history and cultural history. Its key purpose is to demonstrate that the book as an object, not just the text contained within it, is a conduit of interaction between readers and words. Analysis of each component part of the book reveals its purpose, where and how it was kept, who read it, ideological and religious beliefs of the period and whether readers interacted with the text within. Even a lack of evidence of this nature leaves valuable clues about the nature of that particular book.

The earliest forms of writing were etched on stone slabs, transitioning to palm leaves and papyrus in ancient times. Parchment and paper later emerged as important substrates for bookmaking, introducing greater durability and accessibility. Across regions like China, the Middle East, Europe, and South Asia, diverse methods of book production evolved. The Middle Ages saw the rise of illuminated manuscripts, intricately blending text and imagery, particularly during the Mughal era in South Asia under the patronage of rulers like Akbar and Shah Jahan. Prior to the invention of the printing press, made famous by the Gutenberg Bible, each text was a unique handcrafted valuable article, personalized through the design features incorporated by the scribe, owner, bookbinder, and illustrator.[1]</p>
        </div>
    );
};

export default Read;