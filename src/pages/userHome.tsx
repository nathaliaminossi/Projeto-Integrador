import React, { useEffect, useState } from "react";
import ReciclyngModal from "@/components/reciclyngModal";
import RecyclingCard from "@/components/recyclingCard";

import "../global.css";
import { PointsChart } from "@/components/pointsChart";

import {
  ArchiveRestore,
  PlusCircle,
  Sun,
  Moon
} from "lucide-react";
import { useLocation } from "react-router";



// ----------- TIPAGENS -----------
interface User {
  id: string;
  name: string;
  email?: string;
}

interface RecyclingItem {
  material: string;
  quantidade: number;
  localizacao: string;
}

interface LocationState {
  id?: string;
}

// --------------------------------

export default function UserHome() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [recyclingHistory, setRecyclingHistory] = useState<RecyclingItem[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const token = localStorage.getItem("token");

  const location = useLocation();
  const state = location.state as LocationState | null;

  const id =
    state?.id ||
    localStorage.getItem("id");

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("darkMode") || "false");

    if (state?.id) {
      localStorage.setItem("id", state.id);
    }

    if (savedMode) {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, [state]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    document.body.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
          }
        });

        const data = await response.json();

        if (!response.ok) {
          alert(
            "Erro ao buscar dados do usuário: " +
              response.status +
              " " +
              data.mensagem
          );
          return;
        }

        setUser(data);
      } catch (error) {
        console.error("Erro de rede:", error);
      }
    }

    if (id && token) {
      getUser();
    }
  }, [id, token]);

  // -------------------------
  // 🔥 ADICIONAR RECICLAGEM
  // -------------------------
  const handleAddRecycling = (newItem: RecyclingItem) => {
    setRecyclingHistory((prev) => [...prev, newItem]);
  };

  const points = recyclingHistory.length * 10;

  return (
    <div className="flex flex-col w-[90%] mx-auto">
      {/* MODAL */}
      <ReciclyngModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddRecycling}
      />

      {/* USUÁRIO */}
      <div className="flex gap-[30px] p-[25px_55px] bg-white rounded-[20px] border border-[#e3e3e3] mb-[30px] mt-[8px]">
        <img className="w-[150px] h-[150px] rounded-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1663962158765-982d6ad0d006?ixlib=rb-4.1.0&q=60&w=3000"
          alt="foto"
          id="img"
        />

        <div className="text-black text-[10px] mt-[7px]">
          <h1 className="relative top-[10px] right-[5px] text-black text-[35px]">{user?.name || "Usuário"}</h1>
          <h2 className="bio-small-text">
            Hi, my name is {user?.name}! I'm a system developer and I am 18 years old.
          </h2>
          <h3 className="text-[0.8rem]">Rua Tal, 123</h3>
        </div>
      </div>

      <hr className="border-t border-[#858383] opacity-60 my-[12px]" />

      {/* BOTÃO DE ADICIONAR */}
      <div className="btn flex items-center gap-2 ">
        <PlusCircle
          onClick={() => setIsModalOpen(true)}
          size={20}
          color="black"
        />
        <span>Adicionar reciclagem</span>
      </div>

      {/* ÁREA DOS REGISTROS */}
      <div className="w-full min-h-[40vh] flex gap-[30px]">
        <div className="flex-[2]">
          <div className="flex items-center gap-[10px]">
            <ArchiveRestore />
            <h1>Área dos Registros Pendentes</h1>
          </div>

          <div className="overflow-y-auto max-h-[40vh] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 ">
            {recyclingHistory.length === 0 ? (
              <div className="flex justify-start">
                <h2 className="text-[14px]">Você não possui registros</h2>
              </div>
            ) : (
              <div>
                {recyclingHistory.map((item, index) => (
                  <RecyclingCard
                    key={index}
                    material={item.material}
                    quantidade={item.quantidade}
                    localizacao={item.localizacao}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* PONTUAÇÃO */}
        <div className="flex-1 -mt-[100px]">
          <div className="bg-neutral-900 border border-neutral-700 rounded-[12px] p-[30px] mt-[14px] w-[250px] shadow-md sticky top-4 transition">
            <h1>Pontuação</h1>
            <PointsChart  points={points} />
            <p className="bg-amber-600">{points} pontos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
