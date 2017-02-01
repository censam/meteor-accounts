// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {
            main: "Home"
        });
    }
});
// Dashboard Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Dashboard"
        });
    }
});
var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name:'admin'
});

adminRoutes.route('/users',{
    name: 'home',
    action() { BlazeLayout.render("AppLayout", { main: "Users" });
    }
});
