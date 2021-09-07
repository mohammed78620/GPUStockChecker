import axios from 'axios';
import {useForm} from "react-hook-form"

export default function Addgpu(){
    const { register, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
        var json = JSON.stringify({title: data.title,
                                     img: data.img,
                                    stock: "no stock"})
        var config = {
        method: 'post',
        url: 'http://localhost:5000/gpus/add',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : json
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="title" name="gpu" {...register('title')}/>
            <br/>
            <input type="text" placeholder="image link" name="image" {...register('img', {required:true})} />
            <br/>
            <input type="submit" />

        </form>
    )
}