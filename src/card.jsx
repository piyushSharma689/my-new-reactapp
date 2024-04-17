import {Rating} from './counter.jsx'
export default function Card(props){

    const gend=props.g;
   
    return (<>
    <div className="w-80 py-4 bg-indigo-500 rounded-2xl flex justify-center items-center flex-col m-3 hover:shadow-2xl transition-all hover:scale-110">
        <h1 className=" font-bold text-white">Student {props.st}</h1>
        <img className=" w-40 h-40 rounded-full m-4" src={props.img}/>
        <div className=" flex inline-block gap-3 w-full px-5">
            <h4 className=" font-bold">Name:</h4> <h3 className=" text-white">{props.name}</h3>
        </div>
        <div className=" flex inline-block gap-3 w-full px-5">
            <h4 className=" font-bold">College:</h4> <h3 className=" text-white">{props.clg}</h3>
        </div>
        <div className=" flex inline-block gap-3 w-full px-5">
            <h4 className=" font-bold">Roll no.:</h4> <h3 className=" text-white">{props.rol}</h3>
        </div>
        <div className=" flex inline-block gap-3 w-full px-5">
            <h4 className=" font-bold">Phone no.:</h4> <h3 className=" text-white">{props.mob}</h3>
        </div>
        <div className=" flex inline-block gap-3 w-full px-5">
            <h4 className=" font-bold">Gender:</h4> {gend=='f'? <h3 className=" text-white">Female</h3>:<h3 className=" text-white">Male</h3>}
        </div>
        <div className="flex flex-row p-2"> <Rating/><Rating/><Rating/><Rating/><Rating/></div>
    </div>
       
    </>);
}