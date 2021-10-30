package co.edu.unab.shoppc.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.unab.shoppc.models.ComputadorModel;
import co.edu.unab.shoppc.repositories.ComputadorRepository;

@Service
public class ComputadorService {
    @Autowired
    ComputadorRepository computadorRepository;

    public ArrayList<ComputadorModel> obtenerComputadores(){
        return (ArrayList<ComputadorModel>) computadorRepository.findAll();
    }

    public ComputadorModel guardarComputador( ComputadorModel computador){
        return computadorRepository.save(computador);
    }

    public Optional<ComputadorModel> obtenerPorId(Long id){
        return computadorRepository.findById(id);
    }
    public ArrayList<ComputadorModel> obtenerPorCategoria(Integer categoria){
        return computadorRepository.findByCategoria(categoria);
    }

    public boolean eliminarComputador(Long id){
        try{
            computadorRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}