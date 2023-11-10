use bevy::prelude::*;

fn main() {
	App::new()
		.add_plugins((DefaultPlugins, HelloPlugin))
		.run();
}

#[derive(Component)]
struct Person;

#[derive(Component)]
struct Name(String);

fn ap(mut commands: Commands) {
	commands.spawn((Person, Name("Albert".to_string())));
	commands.spawn((Person, Name("Renzo".to_string())));
	commands.spawn((Person, Name("Zayna".to_string())));
}

#[derive(Resource)]
struct GreetTimer(Timer);

fn gp(time: Res<Time>, mut timer: ResMut<GreetTimer>, query: Query<&Name, With<Person>>) {
	// update our timer with the time elapsed since the last update
	// if that caused the timer to finish, we say hello to everyone
	if timer.0.tick(time.delta()).just_finished() {
		for name in &query {
			println!("Hello {}!", name.0);
		}
	}
}

//PLUGIN
pub struct HelloPlugin;

impl Plugin for HelloPlugin {
	fn build(&self, app: &mut App) {
		app
			.insert_resource(GreetTimer(Timer::from_seconds(2.0, TimerMode::Repeating)))
			.add_systems(Startup, ap)
			.add_systems(Update, (gp));
	}
}






/*
// Components: Rust structs that implement the Component trait
#[derive(Component)]
struct Position { x: f32, y: f32 }
 //Systems: normal Rust functions
fn print_position_system(query: Query<&Position>) {
	 for position in &query {
		 println!("position: {} {}", position.x, position.y);
	 }
 }
//Entities: a simple type containing a unique integer
struct Entity(u64);
*/
