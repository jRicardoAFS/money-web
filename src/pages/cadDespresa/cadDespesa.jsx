import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SideBar from '../../components/sideBar/sideBar'
import NavBar from '../../components/navBar/navBar'
import './cadDespesa.css'
import api from '../../services/api'

const CadDespesa = () => {
    const { idUrl } = useParams()
    const navigate = useNavigate()
    const [valor, setValor] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState('')

    const SalvarDados =async () => {
        try {
            if (idUrl != 'add') {
                await api.put("/despesas/" + idUrl,{
                    valor,
                    descricao,
                    categoria
                })
            }else{
                await api.post("/despesas/",{
                    valor,
                    descricao,
                    categoria
                })
            }
            navigate('/')
            
        } catch (error) {
        
        }

    };

    const GetDadosDespesa = async (id) => {
        try {
            const response = await api.get("/despesas/" + id)

            setValor(response.data.valor)
            setCategoria(response.data.categoria)
            setDescricao(response.data.descricao)

        } catch (error) {
            alert("Erro ao buscar dados")

        }

    }
    useEffect(() => {
        if (idUrl != 'add') {
            GetDadosDespesa(idUrl)
        }
    }, [])

    return (
        <>
            <NavBar />
            <SideBar />

            <div className="container-despesa-cad">

                <div className="box-despesa-cad rounded">
                    {
                        idUrl === 'add' ? <h1>Nova Despesa</h1> : <h1>Editar Despesa</h1>
                    }


                    <div className="input-group">
                        <p>valor</p>
                        <input type="text" value={valor} className='rounded input-lg w100' id='valor'
                            onChange={(e) => setValor(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <p>Descrição</p>
                        <input type="text" value={descricao} className='rounded  w100' id='valor'
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <p>Categoria</p>
                        <select id="categoria" value={categoria} className='w100 rounded'
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="Selecionar">Selecionar</option>
                            <option value="Carro">Carro</option>
                            <option value="Casa">Casa</option>
                            <option value="Lazer">Lazer</option>
                            <option value="Mercado">Mercado</option>
                            <option value="Educação">Educação</option>
                            <option value="Viagem">Viagem</option>


                        </select>
                    </div>

                    <div className="btn-group text-right ">
                        <button onClick={() => navigate('/')} className='btn btn-red btn-red-outline rounded'>Cancelar</button>
                        <button onClick={() => SalvarDados()} className='btn btn-blue ml-20 rounded'>Salvar</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CadDespesa