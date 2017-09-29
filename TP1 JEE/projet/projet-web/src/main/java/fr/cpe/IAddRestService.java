package fr.cpe;


 
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

@Path("/add")

public interface IAddRestService{
	@GET
	@Produces("text/plain")
	@Path("/")
	public String add(@QueryParam("a") List<Double> nombres);
	
}