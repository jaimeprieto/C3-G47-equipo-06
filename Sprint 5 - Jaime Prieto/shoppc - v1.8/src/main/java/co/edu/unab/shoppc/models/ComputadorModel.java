package co.edu.unab.shoppc.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="computador")
public class ComputadorModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)

    private long id;

    private String referencia;
    private String marca;
    private String dduro;
    private String mram;
    private String procesador;
    private String pantalla;
    private Integer precio;
    private Integer categoria;

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getReferencia() {
        return referencia;
    }
    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getDduro() {
        return dduro;
    }
    public void setDduro(String dduro) {
        this.dduro = dduro;
    }
    public String getMram() {
        return mram;
    }
    public void setMram(String mram) {
        this.mram = mram;
    }
    public String getProcesador() {
        return procesador;
    }
    public void setProcesador(String procesador) {
        this.procesador = procesador;
    }
    public String getPantalla() {
        return pantalla;
    }
    public void setPantalla(String pantalla) {
        this.pantalla = pantalla;
    }
    public Integer getPrecio() {
        return precio;
    }
    public void setPrecio(Integer precio) {
        this.precio = precio;
    }
    public Integer getCategoria() {
        return categoria;
    }
    public void setCategoria(Integer categoria) {
        this.categoria = categoria;
    }
}
