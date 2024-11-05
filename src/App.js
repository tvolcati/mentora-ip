import './index.css';
import logo from './assets/logo.svg';
import heroIMG from './assets/heroIMG.png';
import JonathanIMG from './assets/JonathanIMG.png';
import ProfileCard from './components/ProfileCard';

export default function App() {
  const mentors = [
    {
      image: JonathanIMG,
      name: "Aristóteles",
      title: "Diretor de Churrasco at IP-SP",
      linkedinUrl: "https://www.linkedin.com/in/aristoteles"
    },
    {
      image: JonathanIMG,
      name: "Aristóteles",
      title: "Diretor de Churrasco at IP-SP",
      linkedinUrl: "https://www.linkedin.com/in/aristoteles"
    },
    {
      image: JonathanIMG,
      name: "Aristóteles",
      title: "Diretor de Churrasco at IP-SP",
      linkedinUrl: "https://www.linkedin.com/in/aristoteles"
    },
    {
      image: JonathanIMG,
      name: "Aristóteles",
      title: "Diretor de Churrasco at IP-SP",
      linkedinUrl: "https://www.linkedin.com/in/aristoteles"
    },
    {
      image: JonathanIMG,
      name: "Aristóteles",
      title: "Diretor de Churrasco at IP-SP",
      linkedinUrl: "https://www.linkedin.com/in/aristoteles"
    }

  ];

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
      
      {/* Main Container */}
      <div className="flex px-4 pb-8">
        {/* Left Column with Filter and Divider Line */}
        <div className="w-1/4 pr-4 border-r border-gray-300">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filter">
            Filtrar por:
          </label>
          <select id="filter" className="w-full p-2 border rounded shadow">
            <option value="">Todos</option>
            <option value="diretor">Diretores</option>
            <option value="senior">Senior Developers</option>
          </select>
        </div>

        {/* Right Column with Scrollable Mentor Cards in a Box */}
        <div className="w-3/4 pl-4">
          <div className="border border-gray-300 rounded-lg p-4 h-[500px] overflow-y-auto shadow-md">
            <div className="grid grid-cols-2 gap-4">
              {mentors.map((mentor, index) => (
                <ProfileCard 
                  key={index}
                  image={mentor.image} 
                  name={mentor.name} 
                  title={mentor.title} 
                  linkedinUrl={mentor.linkedinUrl} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
