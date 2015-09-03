# react-flux-contact
a simple show contacts status app using react, flux and nodejs

useful links:
- (THE BESTTTTTT) react for stupid ppl: http://blog.andrewray.me/reactjs-for-stupid-people/
-- react is just view, which contains HTML/JS code in one file/function which is called a component.
- (THE BESTTTTTT) flux for stupid ppl: http://blog.andrewray.me/flux-for-stupid-people/
-- Flux is "one-way" data flow (ie. decoupled observer pattern) concept/pattern.
-- The concept is: view (reactjs) triggers some event (say after text input), that event updates a model,
   then the model triggers an event, and the view responds to the model's events by re-rendering with the latest data.
   ie. view --(triggers event)--> update a model --(triggers event)--> update view by re-rendering with latest data.
