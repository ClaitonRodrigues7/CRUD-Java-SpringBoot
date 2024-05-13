package com.crud.CrudSpring.controle;

import com.crud.CrudSpring.modelo.PessoaModelo;
import com.crud.CrudSpring.modelo.RespostaModelo;
import com.crud.CrudSpring.repositorio.PessoaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/pessoa")
public class PessoaControle {
    @Autowired
    private PessoaRepositorio acoes;

    @RequestMapping(value="/pessoas", method = RequestMethod.GET)
    public @ResponseBody List<PessoaModelo> listar(){
        return acoes.findAll();
    }
    @RequestMapping(value = "/pessoas", method = RequestMethod.POST)
    public @ResponseBody PessoaModelo cadastrar(@RequestBody PessoaModelo pessoa){
        return acoes.save(pessoa);
    }
    @RequestMapping(value = "/pessoas/{codigo}", method = RequestMethod.GET)
    public @ResponseBody PessoaModelo filtrar(@PathVariable Integer codigo){
        return acoes.findByCodigo(codigo);
    }

    @RequestMapping(value = "/pessoas", method = RequestMethod.PUT)
    public @ResponseBody PessoaModelo alterar(@RequestBody PessoaModelo pessoa){
        return acoes.save(pessoa);
    }
    @RequestMapping(value = "/pessoas/{codigo}" , method = RequestMethod.DELETE)
    public @ResponseBody RespostaModelo deletaPessoa(@PathVariable Integer codigo){
        RespostaModelo resposta = new RespostaModelo();

        try{
            PessoaModelo pessoa = filtrar(codigo);
            acoes.delete(pessoa);
            resposta.setMensagem("Pessoa deletada com sucesso!");
        }catch (Exception error){
            resposta.setMensagem("Falha ao deletar pessoa!");
        }

        return resposta;

    }
}
