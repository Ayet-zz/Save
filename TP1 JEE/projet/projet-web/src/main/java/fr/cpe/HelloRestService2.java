package fr.cpe;


import javax.inject.Inject;

import org.jboss.logging.Logger;
import fr.cpe.jms.producer.IHelloJmsProducer;




public class HelloRestService2 implements HelloRestService{

	Logger logger = Logger.getLogger(HelloRestService2.class.getName());
	
	
	@Inject
	private Hello helloService;
	
	@Inject
	private IHelloJmsProducer helloJmsProducerService;
	@Override
	
	public String hello(String name){
	
		logger.info(">>>> Hello");
		return helloJmsProducerService.sayHello(name);
	}
}
