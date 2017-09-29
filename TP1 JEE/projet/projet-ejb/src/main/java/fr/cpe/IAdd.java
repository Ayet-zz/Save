package fr.cpe;

import java.util.List;

import javax.ejb.Local;

@Local
public interface IAdd {

	String add(List<Double> nombres);
}
