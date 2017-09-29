package fr.cpe;


 
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

@Path("/hello")

public interface HelloRestService{
	@GET
	@Produces("text/plain")
	@Path("/")
	public String hello(@QueryParam("name") String name);
	
}