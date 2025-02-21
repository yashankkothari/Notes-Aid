import subjects_comps_fy_odd from "./fy/comps/oddSem/subjects";
import subjects_comps_ty_even from "./ty/comps/evenSem/subject";
import subjects_it_ty_even from "./ty/it/evenSem/subject";

const NotesData = {
  fy: {
    comps: {
      oddSem: subjects_comps_fy_odd,
      evenSem: {},
    },
    it: {
      oddSem: {},
      evenSem: {},
    },
    excp: {
      oddSem: {},
      evenSem: {},
    },
  },
  sy: {
    comps: {
      oddSem: {},
      evenSem: {},
    },
    it: {
      oddSem: {},
      evenSem: {},
    },
    excp: {
      oddSem: {},
      evenSem: {},
    },
  },
  ty: {
    comps: {
      oddSem: {},
      evenSem: subjects_comps_ty_even,
    },
    it: {
      oddSem: {},
      evenSem: subjects_it_ty_even,
    },
    excp: {
      oddSem: {},
      evenSem: {},
    },
  },
  ly: {
    comps: {
      oddSem: {},
      evenSem: {},
    },
    it: {
      oddSem: {},
      evenSem: {},
    },
    excp: {
      oddSem: {},
      evenSem: {},
    },
  },
}

export default NotesData;