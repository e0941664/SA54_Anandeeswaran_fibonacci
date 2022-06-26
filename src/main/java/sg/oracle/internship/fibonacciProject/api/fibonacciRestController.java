package sg.oracle.internship.fibonacciProject.api;

import java.math.BigInteger;
import java.net.URISyntaxException;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.Response.Status;
import sg.oracle.internship.fibonacciProject.resources.fibonaccihelper;
import sg.oracle.internship.fibonacciProject.service.fibonacciCalculatorService;
import sg.oracle.internship.fibonacciProject.service.fibonacciCalculatorServiceImpl;

@Path("/fibonacci")
@Produces(MediaType.APPLICATION_JSON)
public class fibonacciRestController {

	@GET
	@Path("/{elements}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findFibanacci(@PathParam("elements") Integer elements) throws URISyntaxException {
		Response response = null;
		try {
			
			//Creating Instance of the service class
			fibonacciCalculatorService fibonacciservice = new fibonacciCalculatorServiceImpl();

			//Calling method from service class to get the fibonacci list
			BigInteger[] fibonacci = fibonacciservice.fibonacciSequence(elements);
			
			//Passing the fibonacci list and getting the sorted sequence
			BigInteger[] sorted = fibonacciservice.sortfibonacciSequence(fibonacci);

			//Using a helper class to wrap the results
			fibonaccihelper fibhelper = new fibonaccihelper();
			fibhelper.setFibonacci(fibonacci);
			fibhelper.setSorted(sorted);

			//Sending response back to calling service along with wrapped class with result.
			response = Response.status(Response.Status.OK).entity(fibhelper).build();
			return response;
		} catch (Exception e) {
			return Response.status(Status.NOT_FOUND).build();
		}
	}

}
