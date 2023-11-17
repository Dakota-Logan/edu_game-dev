use winit::{
	event_loop::EventLoop,
	window::{Window, WindowBuilder},
	dpi::LogicalPosition,
};

fn main() {
	let event_loop = EventLoop::new();
	let window_builder = WindowBuilder::new()
		.with_theme(Some(winit::window::Theme::Dark))
		.with_title("My Window")
		.with_inner_size(winit::dpi::LogicalSize::new(800., 600.))
		.with_fullscreen(Some(windowed_context.get_primary_monitor()));

	let window  = window_builder.build(&event_loop).unwrap();
	window.set_outer_position(LogicalPosition::new(400., 400.));

	event_loop.run(move |event, _, control_flow| {
		*control_flow = winit::event_loop::ControlFlow::Wait;

		match event {
			winit::event::Event::WindowEvent { event, .. } => match event {
				winit::event::WindowEvent::CloseRequested => *control_flow = winit::event_loop::ControlFlow::Exit,
				_ => (),
			},
			_ => ()
		}
	});
}
