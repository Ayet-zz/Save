package fr.cpe;
import javax.ejb.Stateless;

import fr.cpe.Hello;
@Stateless
public class Hello2 implements Hello{
	public String sayHello(String name){return "Hello" +(name == null ||name.length()<=0 ? "world": name);}
}
