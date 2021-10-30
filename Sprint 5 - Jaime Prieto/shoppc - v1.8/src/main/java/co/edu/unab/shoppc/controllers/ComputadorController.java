package co.edu.unab.shoppc.controllers;

import java.util.ArrayList;
import java.util.Optional;						  

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unab.shoppc.services.ComputadorService;
import co.edu.unab.shoppc.models.ComputadorModel;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RequestMapping("/computador")
public class ComputadorController {
    @Autowired
    ComputadorService computadorService;

    @GetMapping()
    public ArrayList<ComputadorModel> obtenerComputador(){
        return computadorService.obtenerComputadores();
    }

    @PostMapping()
    public ComputadorModel guardarComputador(@RequestBody ComputadorModel computador){
        return this.computadorService.guardarComputador(computador);
    }
	
    @PutMapping()
    public ComputadorModel actualizarComputador(@RequestBody ComputadorModel computador){
        return this.computadorService.guardarComputador(computador);
    }
	
	@GetMapping(path = "/{id}")
    public Optional<ComputadorModel> obtenerComputadorPorId(@PathVariable("id") Long id){
        return this.computadorService.obtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<ComputadorModel> obtenerComputadorPorCategoria(@RequestParam("categoria") Integer categoria){
        return this.computadorService.obtenerPorCategoria(categoria);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.computadorService.eliminarComputador(id);
        if (ok){
            return "Se eliminó el computador con id: "+id;
        }else{
            return "No se pudo eliminar el computador con id: "+id;
        }

    }
	
}
