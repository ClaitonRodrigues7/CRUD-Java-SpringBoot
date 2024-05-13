package com.crud.CrudSpring.repositorio;

import com.crud.CrudSpring.modelo.PessoaModelo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PessoaRepositorio extends CrudRepository <PessoaModelo, Integer>{

    //Listar Pessoas
    List<PessoaModelo> findAll();

    //Pesquisar por Codigo
    PessoaModelo findByCodigo(int codigo);

    //Remover pessoa
    void delete(PessoaModelo pessoa);

    //Cadastrat/alterar Pessoa
    <PeMod extends PessoaModelo> PeMod save(PeMod pessoa);

}
