import mongoose from 'mongoose';
import Activity from '../models/activity.js';
import LeaderboardEntry from '../models/leaderboard.js';
import Team from '../models/team.js';
import User from '../models/user.js';
import Workout from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Ava Brooks',
        email: 'ava.brooks@octofit.dev',
        role: 'captain',
        avatarUrl: 'https://images.example.com/ava.png',
        streakDays: 12,
        workoutCount: 48,
        totalPoints: 1240,
      },
      {
        name: 'Noah Patel',
        email: 'noah.patel@octofit.dev',
        role: 'athlete',
        avatarUrl: 'https://images.example.com/noah.png',
        streakDays: 9,
        workoutCount: 36,
        totalPoints: 980,
      },
      {
        name: 'Mia Chen',
        email: 'mia.chen@octofit.dev',
        role: 'athlete',
        avatarUrl: 'https://images.example.com/mia.png',
        streakDays: 16,
        workoutCount: 54,
        totalPoints: 1385,
      },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Summit Striders',
        tagline: 'Fast climbs, steady pace, big finish.',
        captainId: users[0]._id,
        memberIds: [users[0]._id, users[1]._id],
        totalPoints: 2220,
        wins: 7,
      },
      {
        name: 'Pulse Forge',
        tagline: 'Build power, keep the rhythm.',
        captainId: users[2]._id,
        memberIds: [users[2]._id],
        totalPoints: 1385,
        wins: 5,
      },
    ]);

    await User.updateMany(
      { _id: { $in: [users[0]._id, users[1]._id] } },
      { $set: { teamId: teams[0]._id } }
    );

    await User.updateOne({ _id: users[2]._id }, { $set: { teamId: teams[1]._id } });

    await Activity.insertMany([
      {
        userId: users[0]._id,
        activityType: 'Strength Training',
        durationMinutes: 55,
        caloriesBurned: 460,
        performedAt: new Date('2026-07-12T07:30:00.000Z'),
        notes: 'Lower-body compound session with progressive overload.',
      },
      {
        userId: users[1]._id,
        activityType: 'Cycling',
        durationMinutes: 42,
        caloriesBurned: 390,
        performedAt: new Date('2026-07-13T18:15:00.000Z'),
        notes: 'Interval ride on mixed terrain.',
      },
      {
        userId: users[2]._id,
        activityType: 'Yoga',
        durationMinutes: 35,
        caloriesBurned: 180,
        performedAt: new Date('2026-07-14T06:45:00.000Z'),
        notes: 'Recovery flow focused on mobility and breathing.',
      },
      {
        userId: users[2]._id,
        activityType: 'Run',
        durationMinutes: 28,
        caloriesBurned: 310,
        performedAt: new Date('2026-07-14T19:00:00.000Z'),
        notes: 'Tempo run around the neighborhood loop.',
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        userId: users[2]._id,
        displayName: users[2].name,
        points: 1385,
        rank: 1,
        weeklyChange: 2,
      },
      {
        userId: users[0]._id,
        displayName: users[0].name,
        points: 1240,
        rank: 2,
        weeklyChange: 1,
      },
      {
        userId: users[1]._id,
        displayName: users[1].name,
        points: 980,
        rank: 3,
        weeklyChange: -1,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Power Interval Circuit',
        category: 'Strength + Cardio',
        durationMinutes: 40,
        difficulty: 'Intermediate',
        equipment: ['Dumbbells', 'Jump Rope'],
        targetMuscles: ['Legs', 'Core', 'Shoulders'],
        description: 'Four rounds alternating compound lifts with short cardio bursts.',
      },
      {
        title: 'Endurance Ride',
        category: 'Cycling',
        durationMinutes: 60,
        difficulty: 'Moderate',
        equipment: ['Stationary Bike'],
        targetMuscles: ['Quads', 'Glutes', 'Calves'],
        description: 'Sustained aerobic ride with threshold surges every 10 minutes.',
      },
      {
        title: 'Mobility Reset',
        category: 'Recovery',
        durationMinutes: 25,
        difficulty: 'Beginner',
        equipment: ['Yoga Mat'],
        targetMuscles: ['Hips', 'Back', 'Hamstrings'],
        description: 'Gentle mobility sequence for post-training recovery.',
      },
      {
        title: 'Hill Sprint Builder',
        category: 'Running',
        durationMinutes: 30,
        difficulty: 'Advanced',
        equipment: ['Running Shoes'],
        targetMuscles: ['Glutes', 'Hamstrings', 'Lungs'],
        description: 'Short hill efforts paired with walk-back recoveries.',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
