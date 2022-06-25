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
			System.out.println(elements);
			fibonacciCalculatorService fibonacciservice = new fibonacciCalculatorServiceImpl();

			BigInteger[] fibonacci = fibonacciservice.fibonacciSequence(elements);
			BigInteger[] sorted = fibonacciservice.sortfibonacciSequence(fibonacci);

			fibonaccihelper fibhelper = new fibonaccihelper();
			fibhelper.setFibonacci(fibonacci);
			fibhelper.setSorted(sorted);

			response = Response.status(Response.Status.OK).entity(fibhelper).build();
			System.out.println(response);
			return response;
		} catch (Exception e) {
			return Response.status(Status.NOT_FOUND).build();
		}
	}

}
