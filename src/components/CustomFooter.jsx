import Image from "react-bootstrap/Image";

export const CustomFooter = () =>{
    return (
        <>
            <Image
                src="/public/img/thankYou.png" 
                className="w-100"
            />
            <Image
                src="/public/img/footer.jpg" 
                className="w-100"
            />
        </>
    );
}