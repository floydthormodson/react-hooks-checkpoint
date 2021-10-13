export default function DisplayContent({currentProduct, selector, slogan, category, price}){
    let output = <div></div>;
    if(currentProduct === selector){
        output = <div>
                    {slogan}<br />
                    {category}<br />
                    {price}<br />
                </div>;
    }
    return output;
}