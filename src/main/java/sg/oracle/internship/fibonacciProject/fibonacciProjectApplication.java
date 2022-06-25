package sg.oracle.internship.fibonacciProject;

import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;
import sg.oracle.internship.fibonacciProject.api.fibonacciRestController;

public class fibonacciProjectApplication extends Application<fibonacciProjectConfiguration> {

    public static void main(final String[] args) throws Exception {
        new fibonacciProjectApplication().run(args);
    }

    @Override
    public String getName() {
        return "fibonacciProject";
    }

    @Override
    public void initialize(final Bootstrap<fibonacciProjectConfiguration> bootstrap) {
        // TODO: application initialization
    }

    @Override
    public void run(final fibonacciProjectConfiguration configuration,
                    final Environment environment) {
        // TODO: implement application
    	environment.jersey().register(new fibonacciRestController());
    }

}
