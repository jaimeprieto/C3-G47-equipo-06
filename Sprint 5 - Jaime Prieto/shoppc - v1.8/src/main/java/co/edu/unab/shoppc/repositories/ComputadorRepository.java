package co.edu.unab.shoppc.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import co.edu.unab.shoppc.models.ComputadorModel;

@Repository
public interface ComputadorRepository extends CrudRepository <ComputadorModel , Long> {
    public abstract ArrayList<ComputadorModel> findByCategoria(Integer categoria);
}

