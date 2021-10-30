package co.edu.unab.shoppc.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import co.edu.unab.shoppc.models.UsuarioModel;

@Repository
public interface UsuarioRepository extends CrudRepository <UsuarioModel , Long> {
    public abstract ArrayList<UsuarioModel> findByCategoria(Integer categoria);
}
