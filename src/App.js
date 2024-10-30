import './index.css';
import logo from './assets/logo.svg';
import heroIMG from './assets/heroIMG.png';
import JonathanIMG from './assets/JonathanIMG.png';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <div>
      <header className="w-full bg-white my-1 mx-1 flex justify-between shadow-md">
        <img src={logo} className="items-start max-w-40"/>
        <div className="flex items-center">
            <a href="https://www.institutoponte.org.br" className="mr-4" style={{ color: '#6A6EA0' }}>Sobre</a>
            <h1 className="mr-8" style={{ color: '#6A6EA0' }}>Mentores</h1>
        </div>
      </header>
      <img src={heroIMG} className="w-full"/>
      <div className="text-center py-6 px-6 text-sm" style={{ backgroundColor: '#6A6EA0' }}>
        <h1><b>O programa de mentoria do Instituto Ponte faz parte do programa de formação e desenvolvimento dos alunos do Ensino Superior. A mentoria tem o objetivo de conectar o universitário com um profissional do mercado de trabalho de áreas correlatas que como mentor possa trazer suas experiências e perspectivas sobre a carreira e a atuação nessa área. Buscando assim, que o aluno se sinta mais preparado para o mercado e que tenha boas referências e inspirações para sua trajetória profissional.</b></h1>
      </div>
      <div className="shadow-md">
        <h1 className='mx-4 text-3xl py-8' style={{color:"#6A6EA0"}}>Mentores:</h1>
      </div>
      <ProfileCard 
        image={JonathanIMG} 
        name="Jonathan Doe" 
        title="Senior Developer" 
        linkedinUrl="https://www.linkedin.com/in/jonathandoe" 
      />
    </div>
  )
}