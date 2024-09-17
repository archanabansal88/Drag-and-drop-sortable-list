import { useRef, useState } from "react";
import {data} from "../data/data";

type DataType = Array<{
    id: number,
    name:string,
    content:string
}>

const DragAndDropList = () => {
    const [personData, setpersonData] = useState<DataType>(data);

    const dragPerson = useRef<number>(0);
    const draggedOverPerson = useRef<number>(0);

    const handleSort = () =>{
        const newPersonData = [...personData];
        const temp = newPersonData[dragPerson.current];
        newPersonData[dragPerson.current] = newPersonData[draggedOverPerson.current]
        newPersonData[draggedOverPerson.current] = temp;
        setpersonData(newPersonData);
    }

    return (
        <div>
            {personData.map(({name,id},index)=>{
                return <div 
                        key={id}
                        draggable
                        onDragStart={()=>dragPerson.current = index}
                        onDragEnter={()=>draggedOverPerson.current = index}
                        onDragEnd = {handleSort}
                        onDragOver={(e)=> e.preventDefault()}
                        >
                    <p>{name}</p>
                </div>
            })}

        </div>
    )
}

export default DragAndDropList;