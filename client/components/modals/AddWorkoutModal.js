import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { createWorkout } from "../../features/workoutSlice";
import { Select, MenuItem } from "@material-ui/core";

const AddWorkoutModal = ({ routineId }) => {
  const [workout, setWorkout] = useState("");
  const [day, setDay] = useState("");
  const [sets, setSets] = useState("");
  const [weight, setWeight] = useState("");
  const [rm, setRm] = useState("");
  const [show, setShow] = useState(false);
  const workouts = useSelector((state) => state.workout.workoutData);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  return (
    <>
      <Button className="btn btn-secondary me-3" onClick={handleShow}>
        Add Workout
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Routine Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Workouts</div>
          <form>
            <label className="form-label mt-4">Please choose workout</label>
            <Select
              onChange={(e) => {
                setWorkout(e.target.value);
              }}
              className="dropdown-menu"
              color="secondary"
              variant="outlined"
              value={workout}
              displayEmpty
              required
              fullWidth
            >
              <MenuItem required value="" disabled>
                Workouts
              </MenuItem>
              {workouts.map((wo, idx) => (
                <MenuItem key={idx} value={wo.id}>
                  {wo.name}
                </MenuItem>
              ))}
            </Select>
            <label className="form-label mt-4">How many sets?</label>
            <input
              className="form-control"
              type="number"
              onChange={(e) => {
                setSets(e.target.value);
              }}
            />
            <label className="form-label mt-4">
              How many repetition motion for each set?
            </label>
            <input
              className="form-control"
              type="number"
              onChange={(e) => {
                setRm(e.target.value);
              }}
            />
            <label className="form-label mt-4">Weight for each RM?</label>
            <input
              className="form-control"
              type="number"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
            <label className="form-label mt-4">Please select day</label>
            <Select
              onChange={(e) => {
                setDay(e.target.value);
              }}
              className="dropdown-menu"
              color="secondary"
              variant="outlined"
              value={day}
              displayEmpty
              required
              fullWidth
            >
              <MenuItem required value="" disabled>
                Days
              </MenuItem>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (d, idx) => (
                  <MenuItem key={idx} value={d}>
                    {d}
                  </MenuItem>
                )
              )}
            </Select>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                createWorkout({
                  routine_id: routineId,
                  workout_id: workout,
                  set: sets,
                  repetition_motion: rm,
                  weight,
                  day,
                })
              );
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddWorkoutModal;
