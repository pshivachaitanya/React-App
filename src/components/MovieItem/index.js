import {Component} from 'react'
import MovieDetails from '../MovieDetails'


import './index.css'



const movieDetailsList=[{
uniqueNo:1,
poster:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h",
name:"Game Of Thrones",
rating:9.2,
type:'series'
},
{
uniqueNo:2,
poster:"https://flxt.tmsimg.com/assets/p20492187_b_h9_bf.jpg",
name:"Squid Games",
rating:9.0,
type:'series'
},
{
uniqueNo:3,
poster:"https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
name:"Money Heist",
rating:8.5,
type:'series'
},
{
uniqueNo:4,
poster:"https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
name:"Dark Knight",
rating:9.0,
type:'movie'
},
{
uniqueNo:5,
poster:"https://m.media-amazon.com/images/I/519NBNHX5BL._SY445_.jpg",
name:"The Shawshank Redemption",
rating:9.2,
type:'movie'
},
{
uniqueNo:6,
poster:"https://i.pinimg.com/736x/40/3e/df/403edf0b1c90a4731d26340a27d9749c--avatar-movie-movie-tv.jpg",
name:"Avatar",
rating:9.0,
type:'movie'
},
{
uniqueNo:7,
poster:"https://flxt.tmsimg.com/assets/p185128_b_v8_ag.jpg",
name:"Prison Break",
rating:9.5,
type:'series'
},
{
uniqueNo:8,
poster:"https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX140_CR0,0,140,209_AL_.jpg",
name:"The Walking Dead",
rating:8.2,
type:'series'
}
,
{
uniqueNo:9,
poster:"https://m.media-amazon.com/images/M/MV5BN2NlNGYwYTUtMTczMi00NGVjLTgwMzUtNjBkZjIyNDc2NjcxXkEyXkFqcGdeQXVyODQ5NDUwMDk@._V1_UX140_CR0,0,140,209_AL_.jpg",
name:"Mirzapur",
rating:8.5,
type:'series'
}
,
{
uniqueNo:10,
poster:"https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY209_CR13,0,140,209_AL_.jpg",
name:"The Boys",
rating:8.7,
type:'series'
},
{
uniqueNo:11,
poster:"https://m.media-amazon.com/images/M/MV5BYTA2OGExMTctYTAxYS00NjM0LTljZjAtYjViZWRiMDdiMGRkXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_UY209_CR1,0,140,209_AL_.jpg",
name:"Daredevil",
rating:8.6,
type:'series'
},
{
uniqueNo:12,
poster:"https://m.media-amazon.com/images/M/MV5BMjJlMjJlMzYtNmU5Yy00N2MwLWJmMjEtNWUwZWIyMGViZDgyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY209_CR0,0,140,209_AL_.jpg",
name:"Sacred Games",
rating:8.5,
type:'seeries'
},
{
uniqueNo:13,
poster:"https://m.media-amazon.com/images/M/MV5BM2E5YWY2Y2EtZjFlYS00ZDI0LTk4ODktNWRjYTc1MDQ0YWM2XkEyXkFqcGdeQXVyOTg3NTQwMTU@._V1_UX140_CR0,0,140,209_AL_.jpg",
name:"Afsos",
rating:7.5,
type:'series'
},
{
uniqueNo:14,
poster:"https://m.media-amazon.com/images/M/MV5BMTczNjIzNjk5N15BMl5BanBnXkFtZTgwNTAyMDk1NDM@._V1_UY209_CR0,0,140,209_AL_.jpg",
name:"Breath",
rating:8.3,
type:'series'
},
{
uniqueNo:15,
poster:"https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_UY209_CR13,0,140,209_AL_.jpg",
name:"The family Man",
rating:8.7,
type:'series'
},
{
uniqueNo:16,
poster:"https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX140_CR0,0,140,209_AL_.jpg",
name:"Chernobyl",
rating:9.4,
type:'Series'
},
{
uniqueNo:17,
poster:"https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UY209_CR7,0,140,209_AL_.jpg",
name:"Dexter",
rating:8.4,
type:'series'
},
{
uniqueNo:18,
poster:"https://m.media-amazon.com/images/M/MV5BZWJiMDZmNTAtZDg5YS00NDgyLThkMzctYTczZjllNzU0YWY5XkEyXkFqcGdeQXVyMTAwMDI3ODEw._V1_UX140_CR0,0,140,209_AL_.jpg",
name:"Asur",
rating:8.5,
type:'series'
},
{
uniqueNo:19,
poster:"https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
name:"Euphoria",
rating:8.4,
type:'Series'
},
{
uniqueNo:20,
poster:"https://m.media-amazon.com/images/M/MV5BZDE0ODVlYjktNjJiMC00ODk4LWIwNTktMWRhZmZiOGFhYmUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR13,0,140,209_AL_.jpg",
name:"Succession",
rating:8.5,
type:'series'
},
{
uniqueNo:21,
poster:"https://m.media-amazon.com/images/M/MV5BNTBlZmE4YzItNTY5Mi00NmIxLTlhZTAtOWIxNjFlNTMzNmI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
name:"Kingdom",
rating:8.3,
type:'series'
},
{
uniqueNo:22,
poster:"https://m.media-amazon.com/images/M/MV5BN2FmMjg0Y2YtYmMyYi00MTBjLTllYzMtN2VjYzRhOTVmNWRlXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY209_CR3,0,140,209_AL_.jpg",
name:"6 Feet Under",
rating:8.7,
type:'series'
},
{
uniqueNo:23,
poster:"https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_UY209_CR0,0,140,209_AL_.jpg",
name:"Dark",
rating:8.3,
type:'series'
},
{
uniqueNo:24,
poster:"https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY209_CR0,0,140,209_AL_.jpg",
name:"Fight Club",
rating:8.8,
type:'movie'
},
{
uniqueNo:25,
poster:"https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
name:"Psycho",
rating:8.8,
type:'movie'
},
{
uniqueNo:26,
poster:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
name:"Inception",
rating:8.8,
type:'movie'
},
{
uniqueNo:27,
poster:"https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR2,0,140,209_AL_.jpg",
name:"3 Idiots",
rating:8.8,
type:'movie'
},
{
uniqueNo:28,
poster:"https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_UY209_CR8,0,140,209_AL_.jpg",
name:"Chakde India",
rating:8.2,
type:'movie'
},
{
uniqueNo:29,
poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTANLW6o_XKmdd3zyIgBRb0OyEeqwB54QWJ7ZgJteucuSIZSEZE",
name:"Baahubali:The Beginning",
rating:9.2,
type:'movie'
},
{
uniqueNo:30,
poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlhsFudAiEvNDiNPu_Sx7zkRsOCun061F62b4Cdy9VX6Tin20G",
name:"Baahubali 2: The Conclusion",
rating:8.2,
type:'movie'
},
{
uniqueNo:31,
poster:"https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR8,0,140,209_AL_.jpg",
name:"RRR",
rating:8.0,
type:'movie'
},
{
uniqueNo:32,
poster:"https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_UY209_CR2,0,140,209_AL_.jpg",
name:"KGF:The Chapter 2",
rating:8.4,
type:'movie'
},
{
uniqueNo:33,
poster:"https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_UX140_CR0,0,140,209_AL_.jpg",
name:"Sitaramam",
rating:7.8,
type:'movie'
},
{
uniqueNo:34,
poster:"https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UX140_CR0,0,140,209_AL_.jpg",
name:"Vikram",
rating:8.4,
type:'movie'
},
{
uniqueNo:35,
poster:"https://m.media-amazon.com/images/M/MV5BMzU0MjM3YTQtZmNjYi00ODI5LThhYzQtOWMwZjAxMjg2MTRjXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR1,0,140,209_AL_.jpg",
name:"Jana Gana Mana",
rating:8.3,
type:'movie'
},
{
uniqueNo:36,
poster:"https://m.media-amazon.com/images/M/MV5BNjNhN2UxMzItZDc1ZC00MDUwLTk4YzItMDlkZGZmNGYyZmVmXkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_UY209_CR4,0,140,209_AL_.jpg",
name:"Avatar",
rating:7.0,
type:'movie'
},
{
uniqueNo:37,
poster:"https://m.media-amazon.com/images/M/MV5BNDExZjFiYjItMmM3OS00OGUxLTliMTctMzFhZDkzMmFhMzY1XkEyXkFqcGdeQXVyMTA1NTAyMjAw._V1_UY98_CR1,0,67,98_AL_.jpg",
name:"Saaho",
rating:8.8,
type:'movie'
},
{
uniqueNo:38,
poster:"https://m.media-amazon.com/images/M/MV5BNzcwMzkwODE1NF5BMl5BanBnXkFtZTgwNzA1NzAwMTE@._V1_UY98_CR0,0,67,98_AL_.jpg",
name:"1-Nenokkadine",
rating:8.8,
type:'movie'
},
{
uniqueNo:39,
poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnK2RSav9-SF87AFvT4Ot7uuxeA1pVtQDw3qH3430SeiSUHdEv8fmrK3k&s",
name:"Avengers The End Game",
rating:9.2,
type:'movie'
}
,
{
uniqueNo:40,
poster:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
name:"Interstellar",
rating:9.2,
type:'movie'
}

]

class Home extends Component{
state={
searchInput:"",
tabType:"",
click:'',


}

onChangeUserInput=(event)=>{
this.setState({
searchInput:event.target.value,
click:"search"
}) }

sTab=()=>{
this.setState({
tabType:'series',
click:'series'
}) }


moviesTab=()=>{
this.setState({
tabType:'movie',
click:'movie'
}) }

homeTab=()=>{
this.setState({
tabType:'all',
click:'all'
}) }







render(){
const {searchInput,tabType,click}=this.state
let searchResult=""

if(click==="search"){
searchResult=movieDetailsList.filter((eachUser)=>
eachUser.name.includes(searchInput))
}

else if(click==="series") {
searchResult=movieDetailsList.filter((eachUser)=>
eachUser.type.includes(tabType))

}

else if(click==="movie"){
searchResult=movieDetailsList.filter((eachUser)=>
eachUser.type.includes(tabType))



}
else{
searchResult=movieDetailsList
}

return(
<div>
    <div class="topnav">
        <a className="active" href="#home" onClick={this.homeTab}>Home</a>
        <a href="#movies" onClick={this.moviesTab}>Movies</a>
        <a href="#series" onClick={this.sTab}>Series</a>

        <input type="text" placeholder="search.." onChange={this.onChangeUserInput} value={searchInput} />
    </div>
    

    <ul className="list-items">
        {searchResult.map(eachMovie =>(
        <MovieDetails movieDetails={eachMovie} key={eachMovie.uniqueNo} />)
        )}
    </ul>
</div>

)
}


}

export default Home