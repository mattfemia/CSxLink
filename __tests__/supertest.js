const request = require('supertest');
const express = require('express');
const fs = require('fs');
const path = require('path');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/api/', () => {
    describe('GET', () => {
      it('responds with html type and 200 status', () => {
        request(server).get('/api/portfolio/').expect(200)
      });
    });
  });
});
