import {useState} from 'react';
import style from './Form.module.css';


const Form = ()=>{
    
    const [form,setForm] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:[],
    });
    
    const [errors,setErrors] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:'',
    });
    
    const validate = (form,input)=>{
        const array=['Summer','Fall','Winter','Spring'];
        switch (input){
            case 'name':
                if (!form.name) setErrors({...errors,name:"Activity name couldn't be empty"});
                else  setErrors({...errors,name:''});
                break;
            case 'difficulty':
                if (!Number.isInteger(+form.difficulty)||+form.difficulty<1||+form.difficulty>15)
                     setErrors({...errors,difficulty:'Difficulty must be a valor between 1 and 15'});
                else  setErrors({...errors,difficulty:''});     
                break;
            case 'duration':
                if (!form.duration || isNaN(+form.duration)) 
                   setErrors ({...errors,duration:'Duration must be a numbrer'});
                   else  setErrors({...errors,duration:''});
                break;
            case 'season':
                if (!array.find(element=>element===form.season)) 
                   setErrors ({...errors,season:'You must choose one season..."'});
                else  setErrors({...errors,season:''});
                break;
            // case 'countries':    
            //     if (!form.countries.length) 
            //         setErrors (..errors,countries:'La actividad debe asociarse por lo menos a un país'});
            //     else  setErrors({...errors,[input]:''});
            //     break;    
            default: setErrors({...errors});
        }; 
    };

    const changeHandler = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form,[property]: value});
        validate({...form,[property]: value}, property);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        // llamar al endpoint que graba los datos
    };

    return (
        <form  onSubmit={handleSubmit}>
            <div>
                <label>Actividad</label>
                <input className={errors.name ?style.error :style.success} placeholder = 'Ingrese el nombre de la actividad' type="text" value = {form.name} onChange = {changeHandler} name='name'/>
                {errors.name &&<span className={style.errorAlert}>{errors.name}</span>}
            </div>
            <div>
                <label >Difficulty</label>
                <input className={errors.difficulty ?style.error :style.success} placeholder = 'Ingrese la dificultad de la actividad' type="text" value = {form.difficulty} onChange = {changeHandler} name='difficulty'/>
                {errors.difficulty &&<span className={style.errorAlert}>{errors.difficulty}</span>}
            </div>
            <div>
                <label>Duration</label>
                <input className={errors.duration ?style.error :style.success} placeholder ='Ingrese la duración de la actividad' type="text" value = {form.duration} onChange = {changeHandler} name='duration'/>
                {errors.duration &&<span className={style.errorAlert}>{errors.duration}</span>}
            </div>
            <div>
                <label>Season</label>
                <select className={errors.season ?style.error :style.success} placeholder = 'Elija una estación para el desarrollo de la actividad' name='season' value={form.season} onChange ={changeHandler}>
                    <option value=''>------------</option>
                    <option value='Summer'>Summer</option>
                    <option value='Fall'>Fall</option>
                    <option value='Winter'>Winter</option>
                    <option value='Spring'>Spring</option>
                </select>
                {errors.season &&<span className={style.errorAlert}>{errors.season}</span>}
            </div>
            <div>
                {/* <label >Se realiza en</label>
                <selecttype="text"value = {form.season} onChange = {changeHandler} name='season'/> */}
            </div>

            <button type="submit" 
            disabled={!form.name || !form.difficulty || !form.duration || !form.season || errors.name||errors.difficulty||errors.duration||errors.season}>Send
            </button>


            <h1>Esta es la vista de Form</h1>

        </form>
    );
};

export default Form;