import React, { useState } from 'react';
import './index.css';
import logo from './assets/logo.svg';
import heroIMG from './assets/heroIMG_8.png';
import ProfileCard from './components/ProfileCard';
import InfoCard from './components/InfoCard';
import { FaPhone, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import universitarios from './assets/universitarios.png';
import universitarios_placas from './assets/universitarios_placas.png';

// import dos mentores
import AndreFortuna from './assets/André_Fortuna.jpeg';
import AndreNahas from './assets/André_Nahas.jpg';
import CamilaGiuberti from './assets/Camila_Giuberti_de_Souza.jpg'
import DanielLopes from './assets/Daniel_Lopes.jpg'
import FabricioN from './assets/Fabricio_N..jpeg'
import FelipeRamaldades from './assets/Felipe_Ramaldes_Corrêa.jpg'
import FernandaCesar from './assets/Fernanda_César_Alves.jpg'
import FlavioGoncales from './assets/Flavio_Gonçalves_Maciel_de_Figueiredo.jpg'
import FredericoComerio from './assets/Frederico_Comério.jpg'
import GabrielBylaardt from './assets/Gabriel_Bylaardt_Meira_Rodrigues.jpg'
import GustavoLima from './assets/Gustavo_Lima_Corrêa.jpg'
import IsaacWalker from './assets/Isaac_Walker_de_Abreu.jpg'
import LeandroCarlos from './assets/Leandro_Carlos_Santos.jpg'
import LuanaBontempo from './assets/Luana_Bontempo.jpg'
import MarciaAndrade from './assets/Marcia_Andrade.jpg'
import MurilloVasconcelos from './assets/Murillo_Vasconcelos_Henriques.jpg'
import PollyanaRocha from './assets/Pollyanna_Rocha_Vila_Nova.jpg'
import ReneFerreira from './assets/Rene_Ferreira_de_Oliveira_Neto.jpg'
import RogerioAraujo from './assets/Rogério_Araujo.jpeg'
import SamilaSantana from './assets/Samila_Santana.jpeg'
import ThaisTebaldi from './assets/Thais_Tebaldi_Caser.jpg'
import VaniaGoulart from './assets/Vânia_Goulart.jpg'

export default function App() {
  const [selectedArea, setSelectedArea] = useState('');

  const mentors = [
    {
      image: AndreFortuna,
      name: "André Fortuna",
      title: "Negócios - Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/aristoteles"
    },
    {
      image: AndreNahas,
      name: "André Nahas",
      title: "Empreendedorismo",
      linkedinUrl: "https://www.linkedin.com/in/andrenahas/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br"
    },
    {
      image: CamilaGiuberti,
      name: "Camila Giuberti",
      title: "Farmácia",
      linkedinUrl: "https://www.linkedin.com/in/camilagiuberti/"
    },
    {
      image: DanielLopes,
      name: "Daniel Lopes",
      title: "Negócios - Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/almeidalopes/"
    },
    {
      image: FabricioN,
      name: "Fabricio Norbim",
      title: "Mercado Financeiro",
      linkedinUrl: "https://www.linkedin.com/in/fabricionorbim/"
    },
    {
      image: FelipeRamaldades,
      name: "Felipe Ramaldes Corrêa",
      title: "Consultoria",
      linkedinUrl: "https://www.linkedin.com/in/felipe-ramaldes-corr%C3%AAa-783315129/"
    },
    {
      image: FernandaCesar,
      name: "Fernanda César Alves",
      title: "Consultoria",
      linkedinUrl: "https://www.linkedin.com/in/fernanda-cesar/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br"
    },
    {
      image: FlavioGoncales,
      name: "Flavio Gonçalves",
      title: "Mercado Financeiro",
      linkedinUrl: "https://www.linkedin.com/in/fl%C3%A1vio-figueiredo-04263250/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br"
    },
    {
      image: FredericoComerio,
      name: "Frederico Comério",
      title: "Negócios - Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/frederico-comerio/"
    },
    {
      image: GabrielBylaardt,
      name: "Gabriel Bylaardt",
      title: "Mercado Financeiro",
      linkedinUrl: "https://www.linkedin.com/in/gbmeira/" 
    },
    {
      image: GustavoLima,
      name: "Gustavo Lima",
      title: "Mercado Financeiro",
      linkedinUrl: "https://open.substack.com/pub/gustavolcorrea/p/pequenas-mudancas-grandes-impactos?r=2nkoa0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true" 
    },
    {
      image: IsaacWalker,
      name: "Isaac Walker",
      title: "Medicina",
      linkedinUrl: "https://www.linkedin.com/in/isaac-abreu-43841b30/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br" 
    },
    {
      image: LeandroCarlos,
      name: "Leandro Carlos",
      title: "Negócios - Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/leandro-carlos-ribeiro-dos-santos/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br" 
    },
    {
      image: LuanaBontempo,
      name: "Luana Bontempo e Silva",
      title: "Tecnologia",
      linkedinUrl: "https://www.linkedin.com/in/luana-bontempo/" 
    },
    {
      image: MarciaAndrade,
      name: "Marcia Andrade",
      title: "Arquitetura",
      linkedinUrl: "https://www.econodata.com.br/contato/marcia-andrade-paoliello-1ae3d6fe8797ae2e5e3bd6f80d6875c6" 
    },    
    {
      image: PollyanaRocha,
      name: "Pollyanna Rocha",
      title: "Recursos Humanos",
      linkedinUrl: "https://www.linkedin.com/in/pollyannavilanovarh/" 
    },
    {
      image: ReneFerreira,
      name: "Rene Ferreira",
      title: "Negócios - Operações",
      linkedinUrl: "https://www.linkedin.com/in/ren%C3%AA-neto-02a035a4/" 
    },
    {
      image: RogerioAraujo,
      name: "Rogerio Martins",
      title: "Mercado Financeiro",
      linkedinUrl: "https://www.linkedin.com/in/rogerio-araujo-52431422/?originalSubdomain=br" 
    },
    {
      image: SamilaSantana,
      name: "Samila Santana",
      title: "Medicina",
      linkedinUrl: "https://www.linkedin.com/in/samila-santana-37297aa9/" 
    },
    {
      image: ThaisTebaldi,
      name: "Thais Tebaldi",
      title: "Recursos Humanos",
      linkedinUrl: "https://www.linkedin.com/in/andrefortuna/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br" 
    },
    {
      image: VaniaGoulart,
      name: "Vânia Goulart",
      title: "Recursos Humanos",
      linkedinUrl: "https://www.linkedin.com/in/vaniagoulart/" 
    },
  ];

  const filteredMentors = selectedArea
    ? mentors.filter(mentor => {
        if (selectedArea === "Negócios") {
          return ["Negócios", "Operações", "Empreendedorismo", "Consultoria"].some(area => mentor.title.includes(area));
        } else if (selectedArea === "Saúde") {
          return ["Farmácia", "Medicina", "Nutrição"].some(area => mentor.title.includes(area));
        } else {
          return mentor.title.includes(selectedArea);
        }
      })
    : mentors;

  return (
    <div>
      {/* Header */}
      <header className="w-full bg-white py-3 mx-1 flex justify-between shadow-md">
        <img src={logo} alt="" className="items-start max-w-40" />
        <div className="flex items-center">
          <a href="https://www.institutoponte.org.br" className="mr-4" style={{ color: '#6A6EA0' }}>Sobre</a>
          <a href="#mentores" className="mr-8" style={{ color: '#6A6EA0' }}>Mentores</a>
        </div>
      </header>

      <div className="relative">
        <img src={heroIMG} alt="" className="w-full" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white text-center text-4xl font-bold">
          <h1>Programa de Mentoria universitária</h1>
          <h2 className="text-lg font-thin">Nosso propósito é ser a ponte para a ascensão social em uma geração, por meio da educação de qualidade, para jovens em vulnerabilidade social. Temos 365 alunos apoiados com 102 já na universidade.</h2>
        </div>
        <div className="absolute top-5/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] grid grid-cols-4 gap-4">
          <InfoCard 
            icon={< FaCalendarAlt/>}
            title="Agenda de encontros"
            description="Mentoria com um ou dois universitários do Instituto Ponte, durante 1 ano."
            color="#FFFFFF"
            textColor={"#EBB458"}
          />
          <InfoCard 
            icon={<FaClock />}
            title="Apoio aos alunos"
            description="Um encontro por mês com o aluno para apoiar sua preparação para o mercado de trabalho e transmitir seus conhecimentos sobre sua área de atuação."
            color="#EBB458"
            textColor={"#FFFFFF"}
          />
          <InfoCard 
            icon={<FaMapMarkerAlt />}
            title="Inspiração"
            description="Estimular o aluno na busca por conhecimentos e oportunidades que o ajudem em sua futura carreira."
            color="#FFFFFF"
            textColor={"#EBB458"}
          />
          <InfoCard 
            icon={<FaPhone />}
            title="Inscreva-se"
            description="Torne-se um mentor, para participar basta entrar em contato com nosso WhatsApp."
            additionalContent={<p className="text-2xl font-bold">(27)2233-6363</p>}
            color="#EBB458"
            textColor={"#FFFFFF"}
          />
        </div>
      </div>
      <div className="pt-36" style={{backgroundColor: "#6A6EA0"}}>
        <div className="w-[80%] mx-auto my-8">
          <img alt='' src={universitarios} className="block mx-auto" />
        </div>
      </div>

      <div id="mentores" className="px-6 pb-4 text-2xl font-semibold shadow-md" style={{ color: '#6A6EA0' }}>Mentores:</div>
      <div className="flex flex-col md:flex-row px-4 py-8">
        {/* Left Column with Filter and Divider Line */}
        <div className="w-full md:w-1/4 pr-4 border-r border-gray-300 mb-4 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filter">
            Filtrar por área:
          </label>
          <select 
            id="filter" 
            className="w-full p-2 border rounded shadow"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Negócios">Negócios</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Mercado Financeiro">Mercado Financeiro</option>
            <option value="Recursos Humanos">Gestão de Pessoas</option>
            <option value="Saúde">Saúde</option>
            <option value="Arquitetura">Arquitetura</option>
          </select>
        </div>

        {/* Right Column with Scrollable Mentor Cards in a Box */}
        <div className="w-full md:w-3/4 pl-0 md:pl-4">
          <div className="border border-gray-300 rounded-lg p-4 h-[500px] overflow-y-auto shadow-md custom-scrollbar background-image">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredMentors.map((mentor, index) => (
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

      <div className="mentor-invitation-container flex flex-col md:flex-row w-full h-[400px]">
        {/* Left section for the image */}
        <div className="image-section w-full md:w-2/3 h-full">
          <img 
            src={universitarios_placas} 
            alt="Mentorship Event"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right section for the text */}
        <div className="text-section w-full md:w-1/3 bg-gray-200 flex flex-col justify-center items-start p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Seja mentor você também
          </h2>
          <p className="text-lg text-blue-800 mb-6">
            Faça parte da ponte para o sucesso destes alunos
          </p>
          <button 
            className="flex items-center bg-white text-green-700 border-2 border-green-500 rounded-md px-4 py-2"
            onClick={() => window.open("https://wa.me/552722336363")}
          >
            <FaWhatsapp className="w-6 h-6 mr-2" />
            Fale conosco
          </button>
          <button 
            className="flex items-center bg-white text-blue-700 border-2 border-blue-500 rounded-md px-4 py-2 mt-2"
            onClick={() => window.location.href = "mailto:contato@institutoponte.org.br"}
          >
            <FaEnvelope className="w-6 h-6 mr-2 pr-2" />
               ponte@institutoponte.org.br
          </button>
      
        </div>
      </div>
    </div>
  );
}